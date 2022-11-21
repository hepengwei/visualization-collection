import BigNumber from "bignumber.js";
import { isEmpty, isNil } from "rambda";

const TEN_THOUSAND = 10000;
const THOUSAND = 1000;

const trillion = 1000000000000;
const billion = 1000000000;
const million = 1000000;
const thousand = 1000;

const abbreviations = Object.freeze({
  thousand: "K",
  million: "M",
  billion: "B",
  trillion: "T",
});

const zeroReg = /([0])\1{2}/;

/**
 * 处理
 * @param value string
 * @param zeroNoNA boolean 是否不讲0转换成N/A
 * @returns string
 */
const numberFormat = (value: string | number, zeroNoNA: boolean = false) => {
  if (isEmpty(value) || isNil(value)) return "N/A";

  const bnValue = new BigNumber(value);
  // 是否是负数
  const isNegative = bnValue.isNegative();

  if (isNegative) {
    const _value = format(bnValue.absoluteValue(), zeroNoNA);
    if (_value === "N/A" || _value === "0") {
      return _value;
    }

    return `-${_value}`;
  }

  return format(bnValue, zeroNoNA);
};

const format = (bnValue: BigNumber, zeroNoNA: boolean = false) => {
  if (bnValue.isZero() && !zeroNoNA) {
    return "N/A";
  }

  if (bnValue.isZero() && zeroNoNA) {
    return "0";
  }

  // 币价大于等于一兆的时候，后缀显示T
  if (bnValue.gte(trillion) || bnValue.isEqualTo(trillion)) {
    return bnValue.div(trillion).toFormat(1) + abbreviations["trillion"];
  }

  // 币价大于等于十亿，后缀显示T
  if (
    (bnValue.gte(billion) || bnValue.isEqualTo(billion)) &&
    bnValue.lte(trillion)
  ) {
    return bnValue.div(billion).toFormat(1) + abbreviations["billion"];
  }

  // 币价大于等于一百万，后缀显示T
  if (
    (bnValue.gte(million) || bnValue.isEqualTo(million)) &&
    bnValue.lte(trillion) &&
    bnValue.lte(billion)
  ) {
    return bnValue.div(million).toFormat(1) + abbreviations["million"];
  }

  // 币价大于一万，小数点后面保留一位小数，千分位显示
  if (bnValue.gte(TEN_THOUSAND)) {
    return bnValue.div(thousand).toFormat(1) + abbreviations["thousand"];
  }

  // 币价大于一千且小于一万，小数点后面保留两位小数，千分位显示
  if (bnValue.gte(THOUSAND) && bnValue.lte(TEN_THOUSAND)) {
    return bnValue.div(thousand).toFormat(2) + abbreviations["thousand"];
  }

  const _decimal = bnValue.toFixed().split(".")[1];

  // 币价小于一千，小数点后面保留四位有效数字
  if (bnValue.lte(THOUSAND) && !zeroReg.test(_decimal)) {
    if (bnValue.dp() === 0) {
      return bnValue.toFormat(0);
    }

    return bnValue.dp(4).toNumber();
  }

  // 币价小于一千，小数部分有连续且超过三个的0
  if (bnValue.lte(THOUSAND) && zeroReg.test(_decimal)) {
    return `${bnValue.integerValue(BigNumber.ROUND_DOWN)}.${formatZero(
      _decimal
    )}`;
  }

  return "N/A";
};

/**
 * 格式化小数点后面的0
 * @param value BigNumber.Value
 * @returns
 */
const formatZero = (value: BigNumber.Value) => {
  let data = value.toString().split("");
  let zeros = [];

  for (let i = 1; i <= data.length; i++) {
    if (!new BigNumber(data[i]).isEqualTo(new BigNumber(data[i - 1]))) {
      break;
    } else {
      if (new BigNumber(+data[i]).isZero()) {
        zeros.push(data[i]);
      }
    }
  }
  if (zeros.length <= 1) {
    return data.splice(0, 4).join("");
  }
  return `0{${zeros.length + 1}}${data.splice(zeros.length + 1, 4).join("")}`;
};

export default numberFormat;
