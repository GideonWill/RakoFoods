export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://rakofoods.org/#organization",
                name: "Rako Foods",
                alternateName: ["RakoFoods", "Rako", "RakoFood"],
                url: "https://rakofoods.org",
                logo: {
                    "@type": "ImageObject",
                    url: "https://rakofoods.org/images/logo.png",
                    width: 250,
                    height: 60,
                },
                description:
                    "Premier local bar serving homemade food, refreshing drinks, and delicious yoghurt for all your special events.",
                sameAs: [
                    "https://www.facebook.com/rakofoods",
                    "https://www.instagram.com/rakofoods",
                    "https://twitter.com/rakofoods",
                    "https://www.linkedin.com/company/rakofoods",
                    "https://www.youtube.com/@rakofoods",
                ],
                contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "Customer Service",
                    availableLanguage: ["English"],
                },
            },
            {
                "@type": "LocalBusiness",
                "@id": "https://rakofoods.org/#localbusiness",
                name: "Rako Foods",
                alternateName: ["RakoFoods", "Rako", "RakoFood"],
                image: "https://rakofoods.org/images/logo.png",
                url: "https://rakofoods.org",
                priceRange: "$$",
                servesCuisine: ["Local Cuisine", "Homemade Food"],
                description:
                    "Your premier local bar serving homemade food, refreshing drinks, and delicious yoghurt. Perfect for weddings, funerals, birthdays, and special events.",
                keywords:
                    "rako, rakofood, rakofoods, local bar, homemade food, refreshing drinks, yoghurt, event catering, wedding catering, funeral catering, birthday catering",
            },
            {
                "@type": "FoodEstablishment",
                "@id": "https://rakofoods.org/#foodestablishment",
                name: "Rako Foods",
                alternateName: ["RakoFoods", "Rako", "RakoFood"],
                url: "https://rakofoods.org",
                servesCuisine: ["Local Cuisine", "Homemade Food", "Beverages"],
                menu: "https://rakofoods.org/menu",
                acceptsReservations: "True",
                description:
                    "Local bar specializing in homemade food, refreshing drinks, and yoghurt for all occasions.",
            },
            {
                "@type": "WebSite",
                "@id": "https://rakofoods.org/#website",
                url: "https://rakofoods.org",
                name: "Rako Foods | RakoFoods",
                description:
                    "Premier local bar serving homemade food, refreshing drinks, and delicious yoghurt",
                publisher: {
                    "@id": "https://rakofoods.org/#organization",
                },
                potentialAction: {
                    "@type": "SearchAction",
                    target: {
                        "@type": "EntryPoint",
                        urlTemplate: "https://rakofoods.org/search?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                },
            },
            {
                "@type": "Service",
                "@id": "https://rakofoods.org/#service",
                name: "Local Bar & Catering Services",
                provider: {
                    "@id": "https://rakofoods.org/#organization",
                },
                serviceType: [
                    "Local Bar Services",
                    "Event Catering",
                    "Wedding Catering",
                    "Funeral Catering",
                    "Birthday Catering",
                    "Homemade Food Service",
                    "Beverage Service",
                ],
                areaServed: {
                    "@type": "Place",
                    name: "Local Area",
                },
                description:
                    "Professional local bar and catering services featuring homemade food, refreshing drinks, and yoghurt for weddings, funerals, birthdays, and special events.",
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
