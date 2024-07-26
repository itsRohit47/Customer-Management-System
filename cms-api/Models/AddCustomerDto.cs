namespace CmsApi
{
    // Represents the data transfer object for adding a customer
    public class AddCustomerDto
    {
        // The required first name of the customer
        public required string FirstName { get; set; }

        // The required last name of the customer
        public required string LastName { get; set; }

        // The optional email address of the customer
        public string? Email { get; set; }

        // The optional phone number of the customer
        public string? Phone { get; set; }
    }
}