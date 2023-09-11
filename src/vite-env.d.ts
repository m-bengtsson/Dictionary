/// <reference types="vite/client" />

type Word = {
   word: string;
   phonetic: string;
   phonetics: Phonetics[];
   origin: string;
   meanings: Meanings[];
}

type Phonetics = {
   text: string;
   audio: string;
}

type Meanings = {
   partOfSpeech: string;
   definitions: Definitions[];
}


type Definitions = {
   definition: string;
   example: string;
   synonyms: string[];
   antonyms: string[];

}
