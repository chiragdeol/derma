import { createFileRoute } from "@tanstack/react-router";
import { AdminSEOManager } from "./admin.seo";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Admin Portal — Al Nemah Medical Center" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminSEOManager,
});
