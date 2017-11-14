//export interface StoreState {
//  languageName: string;
//  enthusiasmLevel: number;
//}

export type Member = {
  id: number,
  group: number,
  name: string,
  pronounce: string,
  spiritualName: string,
  birthday: string,
  telephone: string,
  postcode: string,
  address: string,
  info: string
};

export interface StoreState {
	//readonly editor: Member;
	//readonly members: Member[];
	editor: Member;
	members: Member[];
}
