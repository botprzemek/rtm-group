const data = useState("", () => ({
    test: "Test",
}));

export const useForm = () => {
    return {
        data,
    };
};

export default useForm;
