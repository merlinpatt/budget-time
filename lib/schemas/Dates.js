import SimpleSchema from 'simpl-schema';

const DatesSchema = new SimpleSchema({
  createdAt: {
    type: Date,
    autoValue() {
      if (this.isInsert) {
        return new Date();
      }
      else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      }
      this.unset();
    },
    denyUpdate: true,
  },
  deletedAt: {
    type: Date,
    denyInsert: true,
    optional: true,
  },
  updatedAt: {
    type: Date,
    autoValue() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true,
  },
});

export default DatesSchema;
