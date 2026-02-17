export const operatorsRepo = (prisma) => ({
  async insertOperator(id, name, passwordHash) {
    return prisma.operators.create({
      data: {
        id,
        name,
        password_hash: passwordHash,
      },
      select: { id: true, name: true, password_hash: true, created_at: true, updated_at: true },
    });
  },

  async findByName(name) {
    return prisma.operators.findUnique({
      where: { name },
    });
  },
});
