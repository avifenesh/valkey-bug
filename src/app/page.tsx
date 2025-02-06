import { getValkey } from "./valkey";

export default function Home() {

  async function valkey() {
    'use server';
    const valkey = getValkey();
  }
  valkey();
  return (
    <div>
      Repo
    </div>
  );
}
