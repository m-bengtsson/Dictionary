/// <reference types="vite/client" />

type Word = {
   word: string;
   meanings: Meanings[];
   phonetic: string;
   phonetics: Phonetics[];
   origin: string;
   sourceUrls?: string[];
   license:? string;
}

type Phonetics = {
   text: string;
   audio: string;
   sourceUrl: string;
   license:  License;
}

type License ={
   name: string;
   url: string;
}

type Meanings = {
   partOfSpeech: string;
   definitions: Definitions[];
   synonyms?: string[];
   antonyms?: string[];
}


type Definitions = {
   definition: string;
   example: string;
   synonyms: string[];
   antonyms: string[];

}
