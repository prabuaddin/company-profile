import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center p-10 bg-pink-200 text-primary-content">
        <aside>
          <Image src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2020/12/27044033/LOGO_footer.png" alt="Footer Logo"  width={100}
            height={100} />
          <p className="text-black">© 2024 PT NATURA CAHAYA PERTIWI</p>
        </aside>
      </footer>
    </>
  );
}
