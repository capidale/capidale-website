<template>
  <Content class="bg-white">
    <Container
      class="py-6 md:flex md:flex-col md:items-center lg:block lg:pt-12"
    >
      <h2
        class="text-base leading-6 text-light-green-600 font-semibold tracking-wide uppercase"
      >
        Privacy Policy
      </h2>
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div class="pt-6 prose lg:prose">
          <p class="text-xl font-medium">
            Capidale is committed to being transparent with you about the
            information we hold. The aim of the information in this policy is to
            give you a clear explanation about how Capidale collects and uses
            the personal and professional information you provide to us and that
            we collect. We ensure that we use your information in accordance
            with all General Data Protection Regulations and PECR concerning the
            protection of personal information.
          </p>
          <h3>Cookies</h3>
          <p>
            Cookies are small text files transferred and stored to your computer
            or device when you visit or interact with a website, only that
            website will be able to see what’s on that cookie. Cookies contain
            information unique to your web browser which allow the website to
            remember your choices and preferences during your visit, but they do
            not include personal information that can identify you.
          </p>
          <p>
            Cookies are important to websites, they help the website you are
            visiting to recognise your device and remember little bits of
            information about your visit like your preferences, settings and how
            you use the website. This information is then used to personalise
            and improve the way you interact with the site. This includes how it
            displays content to you, enabling you to use and select online
            services and tools, and providing you with content that is relevant
            to you based on your previous visits and browsing habits.
          </p>
          <p>
            Capidale may automatically use cookies to enable you to interact
            with the site. It’s important to note that different cookies do
            different jobs, below are a summary of cookies used by our website.
          </p>
          <ul>
            <li>
              Site experience cookies: These cookies are used to support your
              experience on the site and include user-selected options, site
              navigation aids, etc. Generally, no personally identifiable data
              is collected with these types of cookies.
            </li>
            <li>
              Performance and operation cookies: These cookies are used in the
              management of the site and include web analytics. Limited
              identifiable data may be collected.
            </li>
            <li>
              Anonymous cross site tracking: These cookies are used to track our
              visitors across our websites. They can be used to build up a
              profile of search and/or browsing history for every visitor.
              Identifiable or unique data may be collected. Anonymized data may
              be shared with third parties.
            </li>
          </ul>
          <p>
            You can control and remove cookies via settings in your web
            browsers. However restricting cookies may affect your use of our
            website and prevent some services and selection tools from working.
          </p>
          <h3>Data Storage</h3>
          <p>
            When you contact us we will use those details to stay in touch with
            you throughout our conversations. Your data may be held in documents
            in various ways, such as proposals to explain our work, contracts
            for our work together, invoices and fundraising applications.
          </p>
          <p>
            All of our systems are cloud-based and can be accessed globally via
            secure log-in systems. Access is limited to staff of Capidale only,
            and all cloud-based systems used two-factor authentication for
            additional security.
          </p>
          <p>
            You are welcome to request a copy of the information we hold on you
            at any time. You also have the right to ask us to remove your
            details from any/all of our systems and if there is no compelling
            reason why we cannot meet your request then we will remove your
            details entirely.
          </p>
          <p>
            If we are unable to meet your request we will explain why. We would
            welcome any requests for information to be updated.
          </p>
          <h3>Communication with You</h3>
          <p>
            We will use the contact details you have shared with us to
            communicate. We very rarely send out marketing emails, where we do,
            there is always an option to unsubscribe from future marketing
            emails.
          </p>
          <h3>Sharing Your Information</h3>
          <p>
            Capidale will not share your data with any party who would use it
            for any purpose outside of the running of Capidale’s activities as
            already described. We would not sell your data, nor swap it nor
            share your information in a way that means someone else can access
            and use it.
          </p>
          <h3>Questions or complaints</h3>
          <p>
            If you have any questions about this policy please contact Tom
            McEvoy, Fundraising & Research Manager of Capidale at
            tom[at]capidale.co.uk.
          </p>
          <p>
            Capidale aim’s to be transparent on honest when collecting and using
            personal information. We would encourage any potential misuse of
            data to be brought to our attention so we can address this as
            swiftly as we can.
          </p>
          <p>
            If you are not satisfied with how Capidale has handled your
            complaint, you can contact the Information Commissioners Office:
          </p>
          <p>
            Information Commissioner’s Office<br />Wycliffe House<br />Water
            Lane<br />Wilmslow<br />SK9 5AF
          </p>
          <p>Telephone: 0303 123 1113</p>
          <p>Email: casework@ico.org.uk</p>
        </div>
        <div class="pt-6">
          <img
            src="~/assets/img/privacy-policy.png"
            class="h-56 max-w-2xl w-full rounded-lg shadow-md object-cover sm:h-72 md:h-96"
          />
        </div>
      </div>
    </Container>
  </Content>
</template>

<script>
export default {
  head() {
    return {
      title: 'Capidale - Privacy Policy',
    }
  },
}
</script>
