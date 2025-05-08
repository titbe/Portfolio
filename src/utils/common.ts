function getAge(birthYear: number) {
  return new Date().getFullYear() - birthYear;
}

export { getAge };
