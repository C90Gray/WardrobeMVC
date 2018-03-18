using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Wardrobe_MVC.Models;

namespace Wardrobe_MVC.Controllers
{
    public class ShoesController : Controller
    {
        private WardrobeDBEntities db = new WardrobeDBEntities();

        // GET: Shoes
        public ActionResult Index()
        {
            var shoes = db.Shoes.Include(s => s.Occasion).Include(s => s.Season);
            return View(shoes.ToList());
        }

        // GET: Shoes/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Sho sho = db.Shoes.Find(id);
            if (sho == null)
            {
                return HttpNotFound();
            }
            return View(sho);
        }

        // GET: Shoes/Create
        public ActionResult Create()
        {
            ViewBag.OccasionID = new SelectList(db.Occasions, "OccasionID", "OccasionType");
            ViewBag.SeasonID = new SelectList(db.Seasons, "SeasonID", "SeasonType");
            return View();
        }

        // POST: Shoes/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ShoeID,ShoeName,ShoePic,ShoeColor,SeasonID,OccasionID")] Sho sho)
        {
            if (ModelState.IsValid)
            {
                db.Shoes.Add(sho);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.OccasionID = new SelectList(db.Occasions, "OccasionID", "OccasionType", sho.OccasionID);
            ViewBag.SeasonID = new SelectList(db.Seasons, "SeasonID", "SeasonType", sho.SeasonID);
            return View(sho);
        }

        // GET: Shoes/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Sho sho = db.Shoes.Find(id);
            if (sho == null)
            {
                return HttpNotFound();
            }
            ViewBag.OccasionID = new SelectList(db.Occasions, "OccasionID", "OccasionType", sho.OccasionID);
            ViewBag.SeasonID = new SelectList(db.Seasons, "SeasonID", "SeasonType", sho.SeasonID);
            return View(sho);
        }

        // POST: Shoes/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ShoeID,ShoeName,ShoePic,ShoeColor,SeasonID,OccasionID")] Sho sho)
        {
            if (ModelState.IsValid)
            {
                db.Entry(sho).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.OccasionID = new SelectList(db.Occasions, "OccasionID", "OccasionType", sho.OccasionID);
            ViewBag.SeasonID = new SelectList(db.Seasons, "SeasonID", "SeasonType", sho.SeasonID);
            return View(sho);
        }

        // GET: Shoes/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Sho sho = db.Shoes.Find(id);
            if (sho == null)
            {
                return HttpNotFound();
            }
            return View(sho);
        }

        // POST: Shoes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Sho sho = db.Shoes.Find(id);
            db.Shoes.Remove(sho);
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
    }
}
