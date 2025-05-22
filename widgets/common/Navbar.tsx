import { Layout } from "@/shared/ui/Layout";
import { FC } from "react";
import { Link } from "@/shared/i18n/navigation";
import { Typography } from "@/shared/ui/Typography/index";
import { Logo } from "@/entities/common/Logo";
import { useNavigationItems } from "@/shared/hooks/useNavigationItems";

export const Navbar: FC = () => {
  return (
    <nav className="border-border-stroke py-sm bg-background-100 fixed top-0 left-0 w-full border-b">
      <Layout className="flex items-center justify-between">
        <Logo />
        <NavigationItems />
      </Layout>
    </nav>
  );
};

const NavigationItems: FC = () => {
  const items = useNavigationItems();

  return (
    <div className="gap-lg flex items-center">
      {items.map(({ id, ...item }) => (
        <NavItem key={`navigation-item-${id}`} {...item} />
      ))}
    </div>
  );
};

type NavItemProps = {
  label: string;
  link: string;
  icon: FC;
};
const NavItem: FC<NavItemProps> = (props) => {
  const Icon = props.icon as FC<{ className: string }>;

  return (
    <Link href={props.link} className="group gap-micro flex items-center">
      <Icon className="group-hover:[&_path]:stroke-primary-300 [&_path]:transition-all [&_path]:duration-100" />
      <Typography.Body className="group-hover:text-primary-300 transition-colors duration-100">
        {props.label}
      </Typography.Body>
    </Link>
  );
};
