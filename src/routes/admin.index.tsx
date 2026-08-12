import { createFileRoute } from "@tanstack/react-router";
import { AdminSEOManager } from "@/components/admin/AdminSEOManager";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Admin Portal — Al Nemah Medical Center" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminSEOManager,
});
