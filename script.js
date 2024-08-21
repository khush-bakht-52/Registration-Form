function displayFormData() {
    // Retrieve form data
    const fullName = document.getElementById('full-name').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const gender = document.getElementById('gender').value;
    const occupation = document.getElementById('occupation').value;
    const idType = document.getElementById('id-type').value;
    const idNumber = document.getElementById('id-number').value;
    const issueAuthority = document.getElementById('issue-authority').value;
    const issueDate = document.getElementById('issue-date').value;
    const issueState = document.getElementById('issue-state').value;
    const expiryDate = document.getElementById('expiry-date').value;

    // Construct the display content
    const displayContent = `
        <strong>Full Name:</strong> ${fullName}<br>
        <strong>Date of Birth:</strong> ${dob}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Mobile Number:</strong> ${mobile}<br>
        <strong>Gender:</strong> ${gender}<br>
        <strong>Occupation:</strong> ${occupation}<br>
        <strong>ID Type:</strong> ${idType}<br>
        <strong>ID Number:</strong> ${idNumber}<br>
        <strong>Issue Authority:</strong> ${issueAuthority}<br>
        <strong>Issue Date:</strong> ${issueDate}<br>
        <strong>Issue State:</strong> ${issueState}<br>
 <strong>Expiry Date:</strong> ${expiryDate}
    `;

    // Display the content below the form
    const displayDiv = document.getElementById('display-content');
    displayDiv.innerHTML = displayContent;
    document.getElementById('display-data').style.display = 'block';

    // Scroll to the displayed data section
    document.getElementById('display-data').scrollIntoView({ behavior: 'smooth' });
}