using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace CmsApi
{
    // Add a unique index on the Email property
    [Index(nameof(Email), IsUnique = true)]
    public class Customer
    {
        // Primary key for the Customer entity
        [Key]
        public int Id { get; set; }

        // The first name of the customer
        public required string FirstName { get; set; }

        // The last name of the customer
        public required string LastName { get; set; }

        // The email address of the customer
        [EmailAddress]
        public string? Email { get; set; }

        // The phone number of the customer
        [Phone]
        public string? Phone { get; set; }

        // The date and time when the customer was created (default value is the current UTC time)
        public DateTime DateCreated { get; set; } = DateTime.UtcNow;
    }
}
