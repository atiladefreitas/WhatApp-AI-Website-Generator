// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface Contact {
  //Nome
  name: string;

  // PHOTOS
  photos: {
    photo1: {
      base64: string;
      type: string;
    };
    photo2: {
      base64: string;
      type: string;
    };
    photo3: {
      base64: string;
      type: string;
    };
    logo: {
      base64: string;
      type: string;
    };
    schedules: {
      base64: string;
      type?: string;
    };
  };

  isPayer: string;

  // Address
  address: {
    zipCode: string;
    street: string;
    number: string;
    complement: string;
    city: string;
    state: string;
    neighborhood: string;
  };

  color: string;

  whatsApp: string;

  //text content
  description: string;
  products: string;
  call: string;
  history: string;

  //Images
  logo: File;
  historyPhoto: string;
  offerPhoto: string;
  gallery: string;

  //calendar info
  segunda: string;
  terca: string;
  quarta: string;
  quinta: string;
  sexta: string;
  sabado: string;
  domingo: string;

  //?
  name_quality1: string;
  name_quality2: string;
  name_quality3: string;

  //qualities
  qualities1: string;
  qualities2: string;
  qualities3: string;

  quality1: string;
  quality2: string;
  quality3: string;

  qualitydescription1: string;
  qualitydescription2: string;
  qualitydescription3: string;

  //client info
  isAutonomous: string;
  convertedName: string;
  phone: string;
  id: string;

  mainColor: string;
  secondaryColor: string;
  accentColor: string;

  alt_description: string;
  urls: string;

  coverKeyWords: string;
  historyKeyWords: string;
  productsKeyWords: string;

  instagram: string;
  facebook: string;
  whatsIcon: string;
  tiktok: string;
  youtube: string;
  origin: string;

  secondTitle: string;
  thirdTitle: string;
  fifthTitle: string;
  galleryTitle: string;

  // buttons
  isFirstButtonDisabled: string; // Desabilita a o botão da primeira sessão ["on" / "off"]
  isSecondButtonDisabled: string;
  isThirdButtonDisabled: string;

  isFourthSecVisible: string; // Desabilita a quarta sessão ["on" / "off"]
  isAgendaVisible: string;    // Desabilita os horários ["on" / "off"]
  isAddressVisible: string;   // Desabilita a endereço ["on" / "off"]

  isFirstPhotoHidden: string; // Desabilita a primera foto ["on" / "off"]
  galleryTitleColor: string; // Cor do título da galeria

  firstButtonText: string;
  secondButtonText: string;
  thirdButtonText: string;
  fourthButtonText: string;
  fifthButtonText: string;
  sixthButtonText: string;

  isVideo: string;
}

//

