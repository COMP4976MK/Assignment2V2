namespace DiplomaOptions.Migrations.CourseOptionMigrations
{
    using DiplomaDataModel.CourseOption;
    using DiplomaDataModel.CourseOption.Seed;
    using System.Collections.Generic;
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<DiplomaDataModel.CourseOption.CourseOptionContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            MigrationsDirectory = @"Migrations\CourseOptionMigrations";
        }

        protected override void Seed(DiplomaDataModel.CourseOption.CourseOptionContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            context.YearTerms.AddOrUpdate(
                  y => y.YearTermId,
                  InitialOptionData.GetYearTerm().ToArray()
            );

            context.SaveChanges();

            context.Options.AddOrUpdate(
                  o => o.OptionId,
                  InitialOptionData.GetOption().ToArray()
            );

            context.SaveChanges();

            List<Choice> choices = new List<Choice>()
            {
                // Term 2015 Begins
                new Choice
                {
                    YearTermId = 2,
                    StudentId = "A00444444",
                    StudentFirstName = "Joe",
                    StudentLastName = "Schmoe",
                    FirstChoiceOptionId = 2,
                    SecondChoiceOptionId = 4,
                    ThirdChoiceOptionId = 3,
                    FourthChoiceOptionId = 6,
                    SelectionDate = System.DateTime.Now
                },
                new Choice
                {
                    YearTermId = 2,
                    StudentId = "A00555555",
                    StudentFirstName = "Joe",
                    StudentLastName = "Schmoe",
                    FirstChoiceOptionId = 5,
                    SecondChoiceOptionId = 3,
                    ThirdChoiceOptionId = 7,
                    FourthChoiceOptionId = 4,
                    SelectionDate = System.DateTime.Now
                },
                new Choice
                {
                    YearTermId = 2,
                    StudentId = "A00666666",
                    StudentFirstName = "Joe",
                    StudentLastName = "Schmoe",
                    FirstChoiceOptionId = 1,
                    SecondChoiceOptionId = 2,
                    ThirdChoiceOptionId = 3,
                    FourthChoiceOptionId = 4,
                    SelectionDate = System.DateTime.Now
                },
                new Choice
                {
                    YearTermId = 2,
                    StudentId = "A00777777",
                    StudentFirstName = "Joe",
                    StudentLastName = "Schmoe",
                    FirstChoiceOptionId = 6,
                    SecondChoiceOptionId = 4,
                    ThirdChoiceOptionId = 3,
                    FourthChoiceOptionId = 2,
                    SelectionDate = System.DateTime.Now
                },
                new Choice
                {
                    YearTermId = 2,
                    StudentId = "A00888888",
                    StudentFirstName = "Joe",
                    StudentLastName = "Schmoe",
                    FirstChoiceOptionId = 7,
                    SecondChoiceOptionId = 5,
                    ThirdChoiceOptionId = 6,
                    FourthChoiceOptionId = 3,
                    SelectionDate = System.DateTime.Now
                },
                new Choice
                {
                    YearTermId = 2,
                    StudentId = "A00999999",
                    StudentFirstName = "Joe",
                    StudentLastName = "Schmoe",
                    FirstChoiceOptionId = 4,
                    SecondChoiceOptionId = 5,
                    ThirdChoiceOptionId = 2,
                    FourthChoiceOptionId = 1,
                    SelectionDate = System.DateTime.Now
                },
                new Choice
                {
                    YearTermId = 2,
                    StudentId = "A00122222",
                    StudentFirstName = "Joe",
                    StudentLastName = "Schmoe",
                    FirstChoiceOptionId = 7,
                    SecondChoiceOptionId = 6,
                    ThirdChoiceOptionId = 5,
                    FourthChoiceOptionId = 4,
                    SelectionDate = System.DateTime.Now
                },
                new Choice
                {
                    YearTermId = 2,
                    StudentId = "A00133333",
                    StudentFirstName = "Joe",
                    StudentLastName = "Schmoe",
                    FirstChoiceOptionId = 1,
                    SecondChoiceOptionId = 3,
                    ThirdChoiceOptionId = 4,
                    FourthChoiceOptionId = 6,
                    SelectionDate = System.DateTime.Now
                },
                new Choice
                {
                    YearTermId = 2,
                    StudentId = "A00144444",
                    StudentFirstName = "Joe",
                    StudentLastName = "Schmoe",
                    FirstChoiceOptionId = 1,
                    SecondChoiceOptionId = 6,
                    ThirdChoiceOptionId = 5,
                    FourthChoiceOptionId = 3,
                    SelectionDate = System.DateTime.Now
                },
                new Choice
                {
                    YearTermId = 2,
                    StudentId = "A00155555",
                    StudentFirstName = "Joe",
                    StudentLastName = "Schmoe",
                    FirstChoiceOptionId = 2,
                    SecondChoiceOptionId = 6,
                    ThirdChoiceOptionId = 4,
                    FourthChoiceOptionId = 3,
                    SelectionDate = System.DateTime.Now
                },
                // Term 2015 Ends

                // Term 2016 Begins
                new Choice
                {
                    YearTermId = 3,
                    StudentId = "A00166666",
                    StudentFirstName = "Joe",
                    StudentLastName = "Schmoe",
                    FirstChoiceOptionId = 2,
                    SecondChoiceOptionId = 7,
                    ThirdChoiceOptionId = 6,
                    FourthChoiceOptionId =4,
                    SelectionDate = System.DateTime.Now
                },
                new Choice
                {
                    YearTermId = 3,
                    StudentId = "A00177777",
                    StudentFirstName = "Joe",
                    StudentLastName = "Schmoe",
                    FirstChoiceOptionId = 6,
                    SecondChoiceOptionId = 4,
                    ThirdChoiceOptionId = 5,
                    FourthChoiceOptionId = 7,
                    SelectionDate = System.DateTime.Now
                },
                 new Choice
                {
                    YearTermId = 3,
                    StudentId = "A00188888",
                    StudentFirstName = "Joe",
                    StudentLastName = "Schmoe",
                    FirstChoiceOptionId = 1,
                    SecondChoiceOptionId = 2,
                    ThirdChoiceOptionId = 5,
                    FourthChoiceOptionId = 3,
                    SelectionDate = System.DateTime.Now
                },
                  new Choice
                {
                    YearTermId = 3,
                    StudentId = "A00199999",
                    StudentFirstName = "Joe",
                    StudentLastName = "Schmoe",
                    FirstChoiceOptionId = 6,
                    SecondChoiceOptionId = 5,
                    ThirdChoiceOptionId = 4,
                    FourthChoiceOptionId = 3,
                    SelectionDate = System.DateTime.Now
                },
                   new Choice
                {
                    YearTermId = 3,
                    StudentId = "A00112222",
                    StudentFirstName = "Joe",
                    StudentLastName = "Schmoe",
                    FirstChoiceOptionId = 5,
                    SecondChoiceOptionId = 4,
                    ThirdChoiceOptionId = 3,
                    FourthChoiceOptionId = 2,
                    SelectionDate = System.DateTime.Now
                },
                    new Choice
                {
                    YearTermId = 3,
                    StudentId = "A00113333",
                    StudentFirstName = "Joe",
                    StudentLastName = "Schmoe",
                    FirstChoiceOptionId = 2,
                    SecondChoiceOptionId = 4,
                    ThirdChoiceOptionId = 5,
                    FourthChoiceOptionId = 7,
                    SelectionDate = System.DateTime.Now
                },
                     new Choice
                {
                    YearTermId = 3,
                    StudentId = "A00114444",
                    StudentFirstName = "Joe",
                    StudentLastName = "Schmoe",
                    FirstChoiceOptionId = 1,
                    SecondChoiceOptionId = 3,
                    ThirdChoiceOptionId = 2,
                    FourthChoiceOptionId = 5,
                    SelectionDate = System.DateTime.Now
                },
                      new Choice
                {
                    YearTermId = 3,
                    StudentId = "A00115555",
                    StudentFirstName = "Joe",
                    StudentLastName = "Schmoe",
                    FirstChoiceOptionId = 3,
                    SecondChoiceOptionId = 4,
                    ThirdChoiceOptionId = 1,
                    FourthChoiceOptionId = 6,
                    SelectionDate = System.DateTime.Now
                },
                       new Choice
                {
                    YearTermId = 3,
                    StudentId = "A00116666",
                    StudentFirstName = "Joe",
                    StudentLastName = "Schmoe",
                    FirstChoiceOptionId = 5,
                    SecondChoiceOptionId = 3,
                    ThirdChoiceOptionId = 2,
                    FourthChoiceOptionId = 7,
                    SelectionDate = System.DateTime.Now
                },
                        new Choice
                {
                    YearTermId = 3,
                    StudentId = "A00117777",
                    StudentFirstName = "Joe",
                    StudentLastName = "Schmoe",
                    FirstChoiceOptionId = 2,
                    SecondChoiceOptionId = 5,
                    ThirdChoiceOptionId = 3,
                    FourthChoiceOptionId = 1,
                    SelectionDate = System.DateTime.Now
                }
                // Term 2016 Ends
            };

            context.Choices.AddOrUpdate(
                c => c.ChoiceId, 
                choices.ToArray());

            context.SaveChanges();
        }
    }
}
