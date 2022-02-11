# Associations
Sequelize supports the standard associations: 
**One-To-One,**
**One-To-Many and** 
**Many-To-Many.**

# Sequelize provides four types of associations that should be combined to create them:

**The HasOne association**
**The BelongsTo association**
**The HasMany association**
**The BelongsToMany association**

Let's say we have two models or two table , A and B. 
Telling Sequelize that you want an association between the two needs just a function call:

const A = sequelize.define('A', /* ... */);
const B = sequelize.define('B', /* ... */);


A.hasOne(B); // A HasOne B
A.belongsTo(B); // A BelongsTo B
A.hasMany(B); // A HasMany B
A.belongsToMany(B, { through: 'C' }); // A BelongsToMany B through the junction table C

The order in which the association is defined is relevant. 
In other words, the order matters, for the four cases. 
In all examples above, A is called the source model and B is called the target model. 

**A.hasOne(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the target model (B).**
**A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A).**

**A.hasMany(B) association means that a One-To-Many relationship exists between A and B, with the foreign key being defined in the target model (B).**

**A.belongsToMany(B, { through: 'C' }) association means that a Many-To-Many relationship exists between A and B, using table C as junction table, which will have the foreign keys (aId and bId, for example). Sequelize will automatically create this model C (unless it already exists) and define the appropriate foreign keys on it.**
