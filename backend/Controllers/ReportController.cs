using Microsoft.AspNetCore.Mvc;
using backend.Services;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReportController : ControllerBase
    {
        private readonly ReportService _reportService;

        public ReportController(ReportService reportService)
        {
            _reportService = reportService;
        }

        [HttpGet("inventory")]
        public IActionResult GetInventoryReport()
        {
            var report = _reportService.GenerateInventoryReport();
            return Ok(report);
        }

        [HttpGet("sales")]
        public IActionResult GetSalesReport()
        {
            var report = _reportService.GenerateSalesReport();
            return Ok(report);
        }
    }
}
