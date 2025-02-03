using Microsoft.AspNetCore.Mvc;

namespace FirstASPNetBlankProjectFun.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Pricing()
        {
            return View();
        }
    }
}
