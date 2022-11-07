// import { Wrap } from "./styles";
import algoliasearch from "algoliasearch/lite";
import { MultipleQueriesQuery } from "@algolia/client-search";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
} from "react-instantsearch-dom";
import { hitComponent } from "./HitComponent";
// import { Props } from "../types/"

export const Search = ({ className }: any) => {
  const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX || "";
  const algoliaClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || "",
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ""
  ); // <== 名称を変更

  // 検索結果なしのモック情報
  const mock = {
    hits: [],
    nbHits: 0,
    nbPages: 0,
    page: 0,
    processingTimeMS: 0,
  };

  // 空文字の場合は何もない情報をモックして渡す
  const searchClient = {
    ...algoliaClient,
    search(requests: MultipleQueriesQuery[]) {
      if (requests.every(({ params }) => !params?.query)) {
        return Promise.resolve(mock);
      }
      return algoliaClient.search(requests);
    },
  };

  return (
    // <Wrap className={className}>
    <InstantSearch indexName={indexName} searchClient={searchClient}>
      <Configure hitsPerPage={3} />
      <SearchBox />
      <Hits hitComponent={hitComponent} />
    </InstantSearch>
    // </Wrap>
  );
};
