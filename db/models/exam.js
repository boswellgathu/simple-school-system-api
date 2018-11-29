/* eslint-disable func-names */

module.exports = (sequelize, DataTypes) => {
  const Exam = sequelize.define('Exam', {
    examDate: DataTypes.DATE,
    grade: {
      type: DataTypes.ENUM,
      values: ['A', 'B', 'C', 'D', 'E'],
      allowNull: false,
    }
  }, {});
  Exam.associate = (models) => {
    Exam.belongsTo(models.Subject, { as: 'subjectId' });
    Exam.belongsTo(models.User, { as: 'studentId' });
  };
  return Exam;
};
