export const texts = {
  searchGoods: "상품검색",
  search: "검색",
  searchOptions: ["전체", "상품명", "브랜드", "상품내용"],
  inquiry: "조회",
  searchedData: "검색된 데이터 : ",
  count: "건",
  productNumber: "상품번호",
  productName: "상품명",
  brandName: "브랜드",
  productContent: "상품내용",
  price: "가격",
  grade: "평점",
  stock: "재고",
  perPage: "페이지당 행 : ",
  sessions: {
    targetedProducts: "targetedProducts",
    keywords: "keywords",
    searchType: "searchType",
  },
};

export const searchOptionMap: searchOptionTypes = {
  전체: "all",
  상품명: "title",
  브랜드: "brand",
  상품내용: "description",
};

interface searchOptionTypes {
  [key: string]: string;
}
