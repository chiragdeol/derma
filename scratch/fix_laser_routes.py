import os

src_file = "src/routes/services.laser.tsx"
index_file = "src/routes/services.laser.index.tsx"

with open(src_file, "r", encoding="utf-8") as f:
    content = f.read()

index_content = content.replace('createFileRoute("/services/laser")', 'createFileRoute("/services/laser/")')

with open(index_file, "w", encoding="utf-8") as f:
    f.write(index_content)

parent_content = """import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/laser")({
  component: () => <Outlet />,
});
"""

with open(src_file, "w", encoding="utf-8") as f:
    f.write(parent_content)

print("Created services.laser.index.tsx and updated services.laser.tsx!")
