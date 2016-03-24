using DiplomaOptions.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DiplomaOptions.Controllers
{
    [Authorize(Roles = "Admin")]
    public class UsersController : Controller
    {

        protected static ApplicationDbContext context = new ApplicationDbContext();

        UserManager<ApplicationUser> userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));

        // GET: Users
        public ActionResult Index()
        {
            List<ApplicationUser> users = context.Users.ToList();
            List<ApplicationUser> usersList = new List<ApplicationUser>();
            foreach (var user in users)
            {
               if(userManager.IsInRole(user.Id, "Student"))
                {
                    usersList.Add(user);
                }
            }
            return View(usersList);
        }

        // Users/Activate/userId
        public ActionResult Deactivate(string id)
        {
            var user = context.Users.Where(r => r.Id.Equals(id, StringComparison.CurrentCultureIgnoreCase)).FirstOrDefault();
            userManager.SetLockoutEnabled(user.Id, true);
            context.SaveChanges();
            return RedirectToAction("Index");
        }

        // Users/Deactivate/userId
        public ActionResult Activate(string id)
        {
            var user = context.Users.Where(r => r.Id.Equals(id, StringComparison.CurrentCultureIgnoreCase)).FirstOrDefault();
            userManager.SetLockoutEnabled(user.Id, false);
            context.SaveChanges();
            return RedirectToAction("Index");
        }

    }
}
