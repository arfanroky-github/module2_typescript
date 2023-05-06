let emni: any;
emni = "alsfjasd";

// 1
(emni as string).length;

//2 
<string>emni.length

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return value;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
}

const result = kgToGram(100) as number;
const result2 = kgToGram("324") as string;

type CustomErrorType = {
  message: string;
};

try {
} catch (error) {
  console.log((error as CustomErrorType).message);
}
