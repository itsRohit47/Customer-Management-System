namespace CmsApi
{
    // Represents the data transfer object for updating a customer
    public class UpadateCustomerDto
    {
        // Gets or sets the first name of the customer
        public required string FirstName { get; set; }

        // Gets or sets the last name of the customer
        public required string LastName { get; set; }

        // Gets or sets the email of the customer (nullable)
        public string? Email { get; set; }

        // Gets or sets the phone number of the customer (nullable)
        public string? Phone { get; set; }
    }
}