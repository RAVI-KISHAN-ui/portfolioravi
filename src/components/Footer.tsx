const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6 text-center">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Ravi Kishan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
