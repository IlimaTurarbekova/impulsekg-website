import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import {
  adminCheck,
  deleteProduct,
  listProducts,
  saveProduct,
} from '../lib/api/products.functions';

export const Route = createFileRoute('/admin')({
  component: Admin,
});

const makeBlank = () => ({
  brand: 'Wahl',
  name: '',
  description: '',
  price: '',
  image_url: '',
  badge: '',
  status: 'In stock',
  featured: true,
});

function Admin() {
  const [password, setPassword] = useState('');
  const [ok, setOk] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [items, setItems] = useState<any[]>([]);
  const [form, setForm] = useState<any>(makeBlank());
  const [busy, setBusy] = useState(false);

  async function refresh() {
    setItems(await listProducts());
  }

  async function login() {
    setBusy(true);
    setError('');
    setMessage('');

    try {
      await adminCheck({ data: { password } });
      await refresh();
      setOk(true);
    } catch {
      setError('Incorrect password or ADMIN_PASSWORD is not configured.');
    } finally {
      setBusy(false);
    }
  }

  async function save() {
    if (!form.brand?.trim() || !form.name?.trim()) {
      setError('Brand and product name are required.');
      return;
    }

    setBusy(true);
    setError('');
    setMessage('');

    try {
      await saveProduct({
        data: {
          ...form,
          password,
          featured: !!form.featured,
        },
      });
      await refresh();
      setForm(makeBlank());
      setMessage('Product saved successfully.');
    } catch {
      setError('Could not save product.');
    } finally {
      setBusy(false);
    }
  }

  async function del(id: number) {
    if (!confirm('Delete this product?')) return;

    setBusy(true);
    setError('');
    setMessage('');

    try {
      await deleteProduct({ data: { id, password } });
      await refresh();

      if (form.id === id) {
        setForm(makeBlank());
      }

      setMessage('Product deleted.');
    } catch {
      setError('Could not delete product.');
    } finally {
      setBusy(false);
    }
  }

  function edit(product: any) {
    setError('');
    setMessage('');
    setForm({
      ...product,
      description: product.description ?? '',
      price: product.price ?? '',
      image_url: product.image_url ?? '',
      badge: product.badge ?? '',
      status: product.status ?? 'In stock',
      featured: !!product.featured,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (!ok) {
    return (
      <main className="admin">
        <Link to="/">← Impulse KG</Link>

        <div className="login">
          <p>IMPULSE KG · ADMIN</p>
          <h1>Catalogue management</h1>

          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !busy) login();
            }}
          />

          <button onClick={login} disabled={busy || !password}>
            {busy ? 'Signing in…' : 'Sign in'}
          </button>

          {error && <small>{error}</small>}
        </div>
      </main>
    );
  }

  return (
    <main className="admin">
      <div className="adminbar">
        <div>
          <p>IMPULSE KG</p>
          <h1>Products</h1>
          <small>{items.length} products in catalogue</small>
        </div>

        <Link to="/">View website →</Link>
      </div>

      <section className="editor">
        <h2>{form.id ? 'Edit product' : 'Add product'}</h2>

        <label>
          Brand
          <input
            value={form.brand}
            onChange={(e) => setForm({ ...form, brand: e.target.value })}
            placeholder="Wahl"
          />
        </label>

        <label>
          Product name
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Product name"
          />
        </label>

        <label>
          Description
          <textarea
            rows={5}
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            placeholder="Product description"
          />
        </label>

        <label>
          Wholesale price
          <input
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            placeholder="Leave blank for price on request"
          />
        </label>

        <label>
          Product image URL
          <input
            value={form.image_url}
            onChange={(e) => setForm({ ...form, image_url: e.target.value })}
            placeholder="https://..."
          />
        </label>

        {form.image_url && (
          <div style={{ margin: '8px 0 20px' }}>
            <small>Image preview</small>
            <br />
            <img
              src={form.image_url}
              alt=""
              style={{
                width: 140,
                height: 140,
                objectFit: 'contain',
                background: '#fff',
                marginTop: 8,
              }}
            />
          </div>
        )}

        <label>
          Badge
          <input
            value={form.badge}
            onChange={(e) => setForm({ ...form, badge: e.target.value })}
            placeholder="NEW / BESTSELLER / PRO"
          />
        </label>

        <label>
          Status
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option value="In stock">In stock</option>
            <option value="On request">On request</option>
            <option value="Out of stock">Out of stock</option>
          </select>
        </label>

        <label className="check">
          <input
            type="checkbox"
            checked={!!form.featured}
            onChange={(e) =>
              setForm({ ...form, featured: e.target.checked })
            }
          />
          Featured
        </label>

        <button onClick={save} disabled={busy}>
          {busy
            ? 'Saving…'
            : form.id
              ? 'Save changes'
              : 'Add product'}
        </button>

        {form.id && (
          <button
            className="quiet"
            onClick={() => {
              setForm(makeBlank());
              setError('');
              setMessage('');
            }}
            disabled={busy}
          >
            Cancel edit
          </button>
        )}

        {error && <small>{error}</small>}
        {message && <small>{message}</small>}
      </section>

      <section className="adminlist">
        {items.length === 0 && <p>No products found.</p>}

        {items.map((p) => (
          <div key={p.id}>
            <span>
              <b>{p.brand}</b> · {p.name}
              <small>
                {p.price || 'Price on request'} · {p.status || 'In stock'}
              </small>
            </span>

            <span>
              <button onClick={() => edit(p)} disabled={busy}>
                Edit
              </button>
              <button
                className="danger"
                onClick={() => del(p.id)}
                disabled={busy}
              >
                Delete
              </button>
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}
