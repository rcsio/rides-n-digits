import { NavLink } from "@/app/ads/[slug]/edit/nav-link";
import { ReactNode } from "react";

type Props = Readonly<{
  children: ReactNode;
  params: { slug: string };
}>;

export default function Layout({ children, params }: Props) {
  return (
    <div className="px-4 py-6">
      <nav>
        <ul className="flex gap-1">
          <li>
            <NavLink href={`/ads/${params.slug}/edit/main`}>Main</NavLink>
          </li>
          <li>
            <NavLink href={`/ads/${params.slug}/edit/details`}>Details</NavLink>
          </li>
          <li>
            <NavLink href={`/ads/${params.slug}/edit/images`}>Images</NavLink>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
}
