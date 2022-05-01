//? I've pretty much ran out of ideas for what i could test on the webpage. (probable because i made
//? the first test pretty much do everything. But If theres any Tests that i should have added in
//? please let me know!)

const { Builder, Capabilities, By } = require("selenium-webdriver");

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get("http://127.0.0.1:5500/movieList/index.html");
});

afterAll(async () => {
  await driver.quit();
});

test("Deleting Button", async () => {
  await driver.sleep(1000);

  let addMovieInput = await driver.findElement(By.xpath("//input"));

  await addMovieInput.sendKeys("Harry Potter");

  let addMovieButton = await driver.findElement(By.xpath("//button"));

  addMovieButton.click();

  await driver.sleep(1000);

  let deleteMovieButton = await driver.findElement(By.id("HarryPotter"));

  deleteMovieButton.click();

  await driver.sleep(2000);
});

test("Add Button", async () => {
  await driver.sleep(1000);

  let addButton = await driver.findElement(By.xpath("//button"));

  addButton.click();

  await driver.sleep(2000);
});

test("Add Duplicate movies", async () => {
  await driver.sleep(1000);

  let addMovieInput = await driver.findElement(By.xpath("//input"));

  await addMovieInput.sendKeys("Movie 1");

  let addButton = await driver.findElement(By.xpath("//button"));

  addButton.click();

  await driver.sleep(2000);

  await addMovieInput.sendKeys("Movie 1");

  addButton.click();

  await driver.sleep(2000);
});
