using Microsoft.AspNetCore.Mvc;

namespace CmsApi.Controllers
{
    // Specifies the route prefix for all actions in this controller
    [Route("[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly CustomerDbContext _context;

        public CustomerController(CustomerDbContext context)
        {
            _context = context;
        }

        // GET: /Customer
        [HttpGet]
        public IActionResult GetAllCustomers()
        {
            if (!_context.Customers.Any())
            {
                return NotFound();
            }
            return Ok(_context.Customers.ToList());
        }

        // GET: /Customer/{id}
        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetCustomerById(int id)
        {
            var customer = _context.Customers.Find(id);
            if (customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }

        // POST: /Customer
        [HttpPost]
        public IActionResult AddCustomer(AddCustomerDto addCustomerDto)
        {
            try
            {
                var customer = new Customer
                {
                    FirstName = addCustomerDto.FirstName,
                    LastName = addCustomerDto.LastName,
                    Email = addCustomerDto.Email,
                    Phone = addCustomerDto.Phone
                };
                _context.Customers.Add(customer);
                _context.SaveChanges();

                return Ok(customer);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT: /Customer/{id}
        [HttpPut]
        [Route("{id:int}")]
        public IActionResult UpdateCustomer(int id, UpadateCustomerDto upadateCustomerDto)
        {
            try
            {
                var customer = _context.Customers.Find(id);
                if (customer == null)
                {
                    return NotFound();
                }
                customer.FirstName = upadateCustomerDto.FirstName;
                customer.LastName = upadateCustomerDto.LastName;
                customer.Email = upadateCustomerDto.Email;
                customer.Phone = upadateCustomerDto.Phone;
                _context.SaveChanges();
                return Ok(customer);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE: /Customer/{id}
        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult DeleteCustomer(int id)
        {
            try
            {
                var customer = _context.Customers.Find(id);
                if (customer == null)
                {
                    return NotFound();
                }
                _context.Customers.Remove(customer);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
