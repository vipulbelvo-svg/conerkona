import { redirect } from "next/navigation";

/**
 * Admin dashboard — Phase 2 / Step 12.
 * For MVP: redirect to CMS provider (Sanity Studio or similar).
 * Protect this route with middleware in Step 13.
 */
export default function AdminPage() {
  // TODO Step 13: replace with proper auth check
  // if (!isAdmin) redirect('/login');

  redirect("/");
}
