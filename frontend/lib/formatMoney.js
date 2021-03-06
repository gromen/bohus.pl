export default function formatMoney(amount) {
  const options = {
    style: 'currency',
    currency: 'PLN',
    minimumFractionDigits: '2',
  };

  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat('pl-PL', options);

  return formatter.format(amount / 100);
}
