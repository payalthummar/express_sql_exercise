CREATE TABLE "Recipes" (
  "recipe_id" SERIAL INT,
  "title" VARCHAR(50),
  "category" VARCHAR(255),
  "image" VARCHAR(255),
  "rating" INT,
  "ingredients" TEXT,
  "instructions" TEXT,
  PRIMARY KEY ("recipe_id")
);

INSERT INTO recipes (title, category, image, rating, ingredients, instructions) VALUES ('Eccles Cake', 'Dessert', 'https://images.ctfassets.net/u01lssz5reyv/3GgEivncpxOBExSqDvvEzn/bfd411d5ccf688765cdcfe1f9af6eb10/traditional-eccles-cakes-27342-2.jpeg?h=250',5,'
1\. 250g block of cold butter
2\. 350g plain flour
3\. juice ½ lemon

4\. 25g butter

5\. 200g currants

6\. 50g mixed chopped peel
7\. 100g light muscovado sugar
8\. 1 tsp each of cinnamon, ginger and ground allspice
9\. zest of 1 lemon and 1 orange, plus a few tbsp of orange juice
10\. 1 egg white, lightly beaten
11\. lightly crushed La Perruche sugar cubes (available at Waitrose, delis or online) or 3 tbsp preservings
',' 1\.To make the pastry, dice the butter and put it in the freezer to go really hard. Tip flour into the bowl of a food processor with half the butter and pulse to the texture of breadcrumbs. Pour in the lemon juice and 100ml iced water, and pulse to a dough. Tip in the rest of the butter and pulse a few times until the dough is heavily flecked with butter. It is important that you don’t overdo this as the flecks of butter are what makes the pastry flaky.

2\.On a floured surface roll the pastry out to a neat rectangle about 20 x 30cm. Fold the two ends of the pastry into the middle, then fold in half. Roll the pastry out again and refold the same way 3 more times resting the pastry for at least 15 mins each time between roll and fold, then leave to rest in the fridge for at least 30 mins before using.

3\.To make the filling, melt the butter in a large saucepan. Take it off the heat and stir in all the other ingredients until completely mixed, then set aside.

4\.To make the cakes, roll the pastry out until it’s just a little thicker than a £1 coin and cut out 8 rounds about 12cm across. Re-roll the trimming if needed. Place a good heaped tablespoon of mixture in the middle of each round, brush the edges of the rounds with water, then gather the pastry around the filling and squeeze it together. Flip them over so the smooth top is upwards and pat them into a smooth round. Flatten each round with a rolling pin to an oval until the fruit just starts to poke through, then place on a baking tray. Cut 2 little slits in each Eccles cakes, brush generously with egg white and sprinkle with the sugar.

5\.Heat the oven to 220C/200C fan/gas 8. Bake the Eccles cakes for 15-20 mins until just past golden brown and sticky. Leave to cool on a rack and enjoy while still warm or cold with a cup of tea. If you prefer, Eccles cakes also go really well served with a wedge of hard, tangy British cheese such as Lancashire or cheddar.');