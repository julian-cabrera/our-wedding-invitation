export default function getRemainingDaysToWedding(): number {
  const oneDay = 1000 * 60 * 60 * 24;
  const presentDate = new Date();
  const weddingDate = new Date(2024, 10, 2);

  return Math.round((weddingDate.getTime() - presentDate.getTime()) / oneDay);
}
