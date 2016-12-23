using System.IO;
using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        var fileName = "index.html";
        var contentType = "text/html";

        string filePath = Path.Combine(Directory.GetCurrentDirectory(), fileName);
        string fileContents = System.IO.File.ReadAllText(filePath);

        return Content(fileContents, contentType);
    }
}
