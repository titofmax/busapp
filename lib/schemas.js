// Define the schema
Jobs = new Mongo.Collection('Jobs');
Deals = new Mongo.Collection('Deals');
Appliants = new Mongo.Collection('Appliants');
Technos = new Mongo.Collection('Technos');

var Schemas = {};

Schemas.Appliants = new SimpleSchema({
  firstname: {
    type: String,
    label: "firstname"
  },
  lastname: {
    type: String,
    label: "lastname"
  },
  addDate: {
    type: Date,
    label: "Date of first contact with candidate"
  },
  actualSalary: {
    type: Number,
    label: "The actual appliant's salary"
  },
  targetSalary: {
    type: Number,
    label: "Target appliant's salary"
  },
  availabilityDate: {
    type: Date,
    label: "Date the appliant will be available for hire"
  },
  technos: {
    type: Schemas.techno,
    optional: true
  }
});

Schemas.Technos = new SimpleSchema({
  name: {
    type: String,
    label: "Techno name"
  },
  level: {
    type: Number,
    label: "Level the appliants masters the techno from 1 to 5"
  }
});

Schemas.Deals =  new SimpleSchema({
  date: {
    type: Date,
    label: "Date this job was added to pipe"
  },
  fee: {
    type: Number,
    label: "Estimated fee for this job",
    max: 100
  },
  salary: {
    type: Number,
    label: "Salary of hire",
    min: 0
  },
  startingDate: {
    type: String,
    label: "First day in company",
    optional: true,
    max: 1000
  }
});

Schemas.Job = new SimpleSchema({
  company: {
    type: String,
    label: "Name of partner company",
    max: 200
  },
  min: {
    type: Number,
    label: "Min salary",
    min: 0
  },
  max: {
    type: Number,
    label: "Max salary",
    min: 0
  },
  turnover: {
    type: Number,
    label: "Potential turnover = moyenne(min,max)*fee"
  },
  fee: {
    type: Number,
    label: "Estimated fee for this job",
    max: 100
  },
  add_date: {
    type: Date,
    label: "Date this job was added to pipe"
  },
  deal: {
    type: Schemas.Deal,
    optional: true
  }
});

Jobs.attachSchema(Schemas.Job);
Deals.attachSchema(Schemas.Deals);
Appliants.attachSchema(Schemas.Appliants);
Technos.attachSchema(Schemas.Technos);