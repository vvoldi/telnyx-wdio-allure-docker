import Page from "./Page";
import users from "../helpers/users.json";

export class ContactUsPage extends Page {
    open(path) {
        return super.open(path);
    }
    elements = {
        logo: () => $("a[href='/']"),
        selectReason: () => $("#Reason_for_Contact__c"),
        salesInquiryOption: () => $("option[value='Sales-Inquiry']"),
        supportOption: () => $("option[value='Support']"),
        selectPrimaryInterest: () => $("#Use_Case_Form__c"),
        inputFirstName: () => $("#FirstName"),
        inputLastName: () => $("#LastName"),
        inputEmail: () => $("#Email"),
        selectPhoneCode: () => $("#Phone_Number_Extension__c"),
        inputPhone: () => $("#Phone_Number_Base__c"),
        inputWebsite: () => $("#Website"),
        textAreaAddInfo: () => $("#Form_Additional_Information__c"),
        submitBTN: () => $("button[type='submit']"),
    };

    async fillForm() {
        await this.elements.selectReason().selectByAttribute("value", users.contactUsUser.reason);
        await this.elements.inputFirstName().setValue(users.contactUsUser.firstName);
        await this.elements.inputLastName().setValue(users.contactUsUser.lastName);
        await this.elements.inputEmail().setValue(users.contactUsUser.email);
        await this.elements.selectPhoneCode().selectByAttribute("value", users.contactUsUser.phoneCode)
        await this.elements.inputPhone().setValue(users.contactUsUser.phone);
        await this.elements.inputWebsite().setValue(users.contactUsUser.website);
        await this.elements.textAreaAddInfo().setValue(users.contactUsUser.addInfo);
        await this.elements.submitBTN().click()
    }
}

export default new ContactUsPage();
