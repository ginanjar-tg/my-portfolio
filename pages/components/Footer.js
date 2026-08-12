import { useAppContext } from "../../context/AppContext";

export default function Footer() {
  const { t } = useAppContext();

  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="font-mono text-xs text-muted">
          <span className="text-lime">g.</span>tg
        </p>
        <p className="font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} Ginanjar Tubagus Gumilar &middot; {t("footerRights")}
        </p>
        <p className="font-mono text-xs text-muted">{t("builtWith")}</p>
      </div>
    </footer>
  );
}
