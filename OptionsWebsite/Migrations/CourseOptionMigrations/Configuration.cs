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
            

            List<Choice> choices = new List<Choice>()
            {
                
                // Term 2016 Begins
                new Choice
                {
                    YearTermId = 4,
                    StudentId = "A00177777",
                    StudentFirstName = "Jack",
                    StudentLastName = "Sidd",
                    FirstChoiceOptionId = 2,
                    SecondChoiceOptionId = 7,
                    ThirdChoiceOptionId = 6,
                    FourthChoiceOptionId =4,
                    SelectionDate = System.DateTime.Now
                },
                new Choice
                {
                    YearTermId = 4,
                    StudentId = "A00188888",
                    StudentFirstName = "Joe",
                    StudentLastName = "Doe",
                    FirstChoiceOptionId = 6,
                    SecondChoiceOptionId = 4,
                    ThirdChoiceOptionId = 5,
                    FourthChoiceOptionId = 7,
                    SelectionDate = System.DateTime.Now
                },
                 new Choice
                {
                    YearTermId = 4,
                    StudentId = "A0019999",
                    StudentFirstName = "Sarah",
                    StudentLastName = "Haye",
                    FirstChoiceOptionId = 1,
                    SecondChoiceOptionId = 2,
                    ThirdChoiceOptionId = 5,
                    FourthChoiceOptionId = 3,
                    SelectionDate = System.DateTime.Now
                },
                  new Choice
                {
                    YearTermId = 4,
                    StudentId = "A00311111",
                    StudentFirstName = "Something",
                    StudentLastName = "here",
                    FirstChoiceOptionId = 6,
                    SecondChoiceOptionId = 5,
                    ThirdChoiceOptionId = 4,
                    FourthChoiceOptionId = 3,
                    SelectionDate = System.DateTime.Now
                },
                   new Choice
                {
                    YearTermId = 4,
                    StudentId = "A00312222",
                    StudentFirstName = "Idontknwo",
                    StudentLastName = "Thisguy",
                    FirstChoiceOptionId = 5,
                    SecondChoiceOptionId = 4,
                    ThirdChoiceOptionId = 3,
                    FourthChoiceOptionId = 2,
                    SelectionDate = System.DateTime.Now
                },
                    new Choice
                {
                    YearTermId = 4,
                    StudentId = "A00413333",
                    StudentFirstName = "Aname",
                    StudentLastName = "Goeshere",
                    FirstChoiceOptionId = 2,
                    SecondChoiceOptionId = 4,
                    ThirdChoiceOptionId = 5,
                    FourthChoiceOptionId = 7,
                    SelectionDate = System.DateTime.Now
                },
                     new Choice
                {
                    YearTermId = 4,
                    StudentId = "A00514444",
                    StudentFirstName = "Oops",
                    StudentLastName = "Ididitagain",
                    FirstChoiceOptionId = 1,
                    SecondChoiceOptionId = 3,
                    ThirdChoiceOptionId = 2,
                    FourthChoiceOptionId = 5,
                    SelectionDate = System.DateTime.Now
                },
                      new Choice
                {
                    YearTermId = 4,
                    StudentId = "A00615555",
                    StudentFirstName = "Bartolmew",
                    StudentLastName = "Kuma",
                    FirstChoiceOptionId = 3,
                    SecondChoiceOptionId = 4,
                    ThirdChoiceOptionId = 1,
                    FourthChoiceOptionId = 6,
                    SelectionDate = System.DateTime.Now
                },
                       new Choice
                {
                    YearTermId = 4,
                    StudentId = "A00716666",
                    StudentFirstName = "Arrghh",
                    StudentLastName = "Matey",
                    FirstChoiceOptionId = 5,
                    SecondChoiceOptionId = 3,
                    ThirdChoiceOptionId = 2,
                    FourthChoiceOptionId = 7,
                    SelectionDate = System.DateTime.Now
                },
                        new Choice
                {
                    YearTermId = 4,
                    StudentId = "A00817777",
                    StudentFirstName = "Akira",
                    StudentLastName = "Movie",
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
