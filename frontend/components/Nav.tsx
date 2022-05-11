import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';
import SignOut from './SignOut';

export default function Nav() {
  const user = useUser();

  return (
    <NavStyles>
      <Link href="/produkty">Produkty</Link>
      {user && (
        <>
          <Link href="/sprzedaz">Sprzedaż</Link>
          <Link href="/zamowienia">Zamówienia</Link>
          <Link href="/konto">Konto</Link>
          <SignOut />
        </>
      )}
      {!user && <Link href="/zaloguj">Zaloguj się</Link>}
    </NavStyles>
  );
}
