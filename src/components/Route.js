export default function Route({ path, children }) {
  return window.location.pathname === path ? children : null;
}
