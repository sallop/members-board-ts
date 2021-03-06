//export interface StoreState {
//  languageName: string;
//  enthusiasmLevel: number;
//}

export type Member = {
  //id: number,  it can't detect type in action.payload
  id: string,
  //group: number,
  group: string,
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
