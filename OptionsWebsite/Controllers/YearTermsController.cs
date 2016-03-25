using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web.Mvc;
using DiplomaDataModel.CourseOption;
using System.Collections.Generic;

namespace DiplomaOptions.Controllers
{
    [Authorize(Roles = "Admin")]
    public class YearTermsController : Controller
    {
        private CourseOptionContext db = new CourseOptionContext();

        // GET: YearTerms
        public ActionResult Index()
        {
            return View(db.YearTerms.ToList());
        }

        // GET: YearTerms/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            YearTerm yearTerm = db.YearTerms.Find(id);
            if (yearTerm == null)
            {
                return HttpNotFound();
            }
            return View(yearTerm);
        }

        // GET: YearTerms/Create
        public ActionResult Create()
        {
            var terms = db.YearTerms.OrderByDescending(x => x.Term).GroupBy(y => y.Term).Select(grp => grp.FirstOrDefault())
                   .ToList().Select(s => new
                   {
                       YearTermID = s.YearTermId,
                       Term = s.Term,
                       TermString = getTerm(s.Term)
                   }); ;
            var years = db.YearTerms.OrderByDescending(x => x.Year).GroupBy(y => y.Year).Select(grp => grp.FirstOrDefault())
                   .ToList();
            ViewBag.Years = new SelectList(years, "Year", "Year");
            ViewBag.Terms = new SelectList(terms, "Term", "TermString");
            return View();
        }

        // POST: YearTerms/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "YearTermId,Year,Term,IsDefault")] YearTerm yearTerm)
        {
            var yearterms = db.YearTerms;
            if (ModelState.IsValid)
            {
                if (yearTerm.IsDefault)
                {
                    foreach (var y in yearterms)
                    {
                        if (y.IsDefault && y.YearTermId != yearTerm.YearTermId)
                        {
                            y.IsDefault = false;
                        }
                    }
                }
                db.YearTerms.Add(yearTerm);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(yearTerm);
        }

        // GET: YearTerms/Edit/5
        public ActionResult Edit(int? id)
        {
            var terms = db.YearTerms.OrderByDescending(x => x.Term).GroupBy(y => y.Term).Select(grp => grp.FirstOrDefault())
                    .ToList().Select(s => new
                    {
                        YearTermID = s.YearTermId,
                        Term = s.Term,
                        TermString = getTerm(s.Term)
                    }); ;
            var years = db.YearTerms.OrderByDescending(x => x.Year).GroupBy(y => y.Year).Select(grp => grp.FirstOrDefault())
                  .ToList();
            ViewBag.Years = new SelectList(years, "Year", "Year");
            ViewBag.Terms = new SelectList(terms, "Term", "TermString");

            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            YearTerm yearTerm = db.YearTerms.Find(id);
            if (yearTerm == null)
            {
                return HttpNotFound();
            }
            return View(yearTerm);
        }

        // POST: YearTerms/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "YearTermId,Year,Term,IsDefault")] YearTerm yearTerm)
        {
            var yearterms = db.YearTerms;    

            if (ModelState.IsValid)
            {
                db.Entry(yearTerm).State = EntityState.Modified;
                if (yearTerm.IsDefault)
                {
                    foreach (var y in yearterms)
                    {
                        if(y.IsDefault && y.YearTermId != yearTerm.YearTermId)
                        {
                            y.IsDefault = false;
                        }
                    }
                }
        
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(yearTerm);
        }

        // GET: YearTerms/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            YearTerm yearTerm = db.YearTerms.Find(id);
            if (yearTerm == null)
            {
                return HttpNotFound();
            }
            return View(yearTerm);
        }

        // POST: YearTerms/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            YearTerm yearTerm = db.YearTerms.Find(id);
            db.YearTerms.Remove(yearTerm);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private string getTerm(int term)
        {
            if (term == 10)
            {
                return "Winter";
            } else if (term == 20)
            {
                return "Spring/Summer";
            } else
            {
                return "Fall";
            }
        }
    }
}
