import Link from "next/link";
import { Hit } from "react-instantsearch-core";

interface HitDoc {
  objectID: string;
  url: string;
  title: string;
  description: string;
  content: string;
}

interface Props {
  hit: Hit<HitDoc>;
}

interface HitComponentProps extends Props {
  onClick: () => void;
}

function HitComponent({ hit }: HitComponentProps): JSX.Element {
  return (
    <div className="bg-white p-3 my-3 mx-auto w-2/5">
      <Link href={hit.url}>
        <a className="hover:text-[#06bbbc]">{hit.title}</a>
      </Link>
    </div>
  );
}

export const hitComponent = ({ hit }: Props): JSX.Element => (
  <HitComponent hit={hit} onClick={() => null} />
);
