function Map() {
    return (
        <div className="map setup__component">
            <iframe
                title="My Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109179.9464799774!2d30.024925765855!3d31.22423867239738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2z2KfZhNil2LPZg9mG2K_YsdmK2Kk!5e0!3m2!1sar!2seg!4v1619326603213!5m2!1sar!2seg"
                width="100%"
                height="500"
                style={{ border: 0 }}
                loading="lazy"></iframe>
        </div>
    );
}

export default Map;
