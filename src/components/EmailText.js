/** Email address that may wrap after the "@" instead of mid-word on narrow screens. */
export default function EmailText({ email }) {
  const [user, domain] = email.split("@");
  return (
    <>
      {user}@<wbr />
      {domain}
    </>
  );
}
