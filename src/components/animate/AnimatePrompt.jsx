import React, { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";
import image from "../../assets/img/images.jpeg";
import { useDispatch, useSelector } from "react-redux";
import {
    animakerAction,
    getOutputImageAction,
} from "../../store/actions/animakerAction";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { baseURL } from "../../repository/Repository";
import { Spinner } from "reactstrap";

export default function AnimatePrompt() {
    const serverAddress = "https://8588-182-183-52-189.ngrok-free.app";
    const clientId = uuidv4();
    const { imageData, loading } = useSelector((state) => state.animaker);
    const [imageShow, setImageShow] = useState(false);
    // const [selectedImage, setSelectedImage] = useState(null);
    const [promptValue, setPromptValue] = useState("");
    const [imgFile, setImgFile] = useState("");
    const [prompt, setPrompt] = useState("");
    // useEffect(() => {
    //     if (imageData != null) {
    //         setPrompt({
    //             prompt: {
    //                 3: {
    //                     inputs: {
    //                         seed: 618284639060744,
    //                         steps: 20,
    //                         cfg: 8,
    //                         sampler_name: "euler",
    //                         scheduler: "normal",
    //                         denoise: 1,
    //                         model: ["4", 0],
    //                         positive: ["6", 0],
    //                         negative: ["7", 0],
    //                         latent_image: ["16", 0],
    //                     },
    //                     class_type: "KSampler",
    //                 },
    //                 4: {
    //                     inputs: {
    //                         ckpt_name: "animagineXLV3_v30.safetensors",
    //                     },
    //                     class_type: "CheckpointLoaderSimple",
    //                 },
    //                 5: {
    //                     inputs: {
    //                         width: 512,
    //                         height: 512,
    //                         batch_size: 1,
    //                     },
    //                     class_type: "EmptyLatentImage",
    //                 },
    //                 6: {
    //                     inputs: {
    //                         text: "change the background to blue and keep the front people the same",
    //                         clip: ["4", 1],
    //                     },
    //                     class_type: "CLIPTextEncode",
    //                 },
    //                 7: {
    //                     inputs: {
    //                         text: "text, watermark,person",
    //                         clip: ["4", 1],
    //                     },
    //                     class_type: "CLIPTextEncode",
    //                 },
    //                 9: {
    //                     inputs: {
    //                         filename_prefix: "ComfyUI",
    //                         images: ["14", 0],
    //                     },
    //                     class_type: "SaveImage",
    //                 },
    //                 10: {
    //                     inputs: {
    //                         image: imageData,
    //                         upload: "image",
    //                     },
    //                     class_type: "LoadImage",
    //                 },
    //                 14: {
    //                     inputs: {
    //                         samples: ["3", 0],
    //                         vae: ["4", 2],
    //                     },
    //                     class_type: "VAEDecode",
    //                 },
    //                 16: {
    //                     inputs: {
    //                         pixels: ["10", 0],
    //                         vae: ["4", 2],
    //                     },
    //                     class_type: "VAEEncode",
    //                 },
    //             },
    //             extra_data: {
    //                 extra_pnginfo: {
    //                     workflow: {
    //                         last_node_id: 16,
    //                         last_link_id: 15,
    //                         nodes: [
    //                             {
    //                                 id: 5,
    //                                 type: "EmptyLatentImage",
    //                                 pos: [473, 609],
    //                                 size: {
    //                                     0: 315,
    //                                     1: 106,
    //                                 },
    //                                 flags: {},
    //                                 order: 0,
    //                                 mode: 0,
    //                                 outputs: [
    //                                     {
    //                                         name: "LATENT",
    //                                         type: "LATENT",
    //                                         links: [],
    //                                         slot_index: 0,
    //                                     },
    //                                 ],
    //                                 properties: {
    //                                     "Node name for S&R": "EmptyLatentImage",
    //                                 },
    //                                 widgets_values: [512, 512, 1],
    //                             },
    //                             {
    //                                 id: 9,
    //                                 type: "SaveImage",
    //                                 pos: [1451, 189],
    //                                 size: {
    //                                     0: 210,
    //                                     1: 270,
    //                                 },
    //                                 flags: {},
    //                                 order: 8,
    //                                 mode: 0,
    //                                 inputs: [
    //                                     {
    //                                         name: "images",
    //                                         type: "IMAGE",
    //                                         link: 12,
    //                                     },
    //                                 ],
    //                                 properties: {},
    //                                 widgets_values: ["ComfyUI"],
    //                             },
    //                             {
    //                                 id: 14,
    //                                 type: "VAEDecode",
    //                                 pos: [1210, 188],
    //                                 size: {
    //                                     0: 210,
    //                                     1: 46,
    //                                 },
    //                                 flags: {},
    //                                 order: 7,
    //                                 mode: 0,
    //                                 inputs: [
    //                                     {
    //                                         name: "samples",
    //                                         type: "LATENT",
    //                                         link: 10,
    //                                     },
    //                                     {
    //                                         name: "vae",
    //                                         type: "VAE",
    //                                         link: 11,
    //                                     },
    //                                 ],
    //                                 outputs: [
    //                                     {
    //                                         name: "IMAGE",
    //                                         type: "IMAGE",
    //                                         links: [12],
    //                                         shape: 3,
    //                                         slot_index: 0,
    //                                     },
    //                                 ],
    //                                 properties: {
    //                                     "Node name for S&R": "VAEDecode",
    //                                 },
    //                             },
    //                             {
    //                                 id: 10,
    //                                 type: "LoadImage",
    //                                 pos: [867, 587],
    //                                 size: [315, 313.9999694824219],
    //                                 flags: {},
    //                                 order: 1,
    //                                 mode: 0,
    //                                 outputs: [
    //                                     {
    //                                         name: "IMAGE",
    //                                         type: "IMAGE",
    //                                         links: [13],
    //                                         shape: 3,
    //                                         slot_index: 0,
    //                                     },
    //                                     {
    //                                         name: "MASK",
    //                                         type: "MASK",
    //                                         links: "null",
    //                                         shape: 3,
    //                                     },
    //                                 ],
    //                                 properties: {
    //                                     "Node name for S&R": "LoadImage",
    //                                 },
    //                                 widgets_values: ["3 idiots.jpg", "image"],
    //                             },
    //                             {
    //                                 id: 4,
    //                                 type: "CheckpointLoaderSimple",
    //                                 pos: [26, 474],
    //                                 size: {
    //                                     0: 315,
    //                                     1: 98,
    //                                 },
    //                                 flags: {},
    //                                 order: 2,
    //                                 mode: 0,
    //                                 outputs: [
    //                                     {
    //                                         name: "MODEL",
    //                                         type: "MODEL",
    //                                         links: [1],
    //                                         slot_index: 0,
    //                                     },
    //                                     {
    //                                         name: "CLIP",
    //                                         type: "CLIP",
    //                                         links: [3, 5],
    //                                         slot_index: 1,
    //                                     },
    //                                     {
    //                                         name: "VAE",
    //                                         type: "VAE",
    //                                         links: [11, 14],
    //                                         slot_index: 2,
    //                                     },
    //                                 ],
    //                                 properties: {
    //                                     "Node name for S&R":
    //                                         "CheckpointLoaderSimple",
    //                                 },
    //                                 widgets_values: [
    //                                     "animagineXLV3_v30.safetensors",
    //                                 ],
    //                             },
    //                             {
    //                                 id: 16,
    //                                 type: "VAEEncode",
    //                                 pos: [1316, 665],
    //                                 size: {
    //                                     0: 210,
    //                                     1: 46,
    //                                 },
    //                                 flags: {},
    //                                 order: 5,
    //                                 mode: 0,
    //                                 inputs: [
    //                                     {
    //                                         name: "pixels",
    //                                         type: "IMAGE",
    //                                         link: 13,
    //                                     },
    //                                     {
    //                                         name: "vae",
    //                                         type: "VAE",
    //                                         link: 14,
    //                                     },
    //                                 ],
    //                                 outputs: [
    //                                     {
    //                                         name: "LATENT",
    //                                         type: "LATENT",
    //                                         links: [15],
    //                                         shape: 3,
    //                                         slot_index: 0,
    //                                     },
    //                                 ],
    //                                 properties: {
    //                                     "Node name for S&R": "VAEEncode",
    //                                 },
    //                             },
    //                             {
    //                                 id: 3,
    //                                 type: "KSampler",
    //                                 pos: [863, 186],
    //                                 size: {
    //                                     0: 315,
    //                                     1: 262,
    //                                 },
    //                                 flags: {},
    //                                 order: 6,
    //                                 mode: 0,
    //                                 inputs: [
    //                                     {
    //                                         name: "model",
    //                                         type: "MODEL",
    //                                         link: 1,
    //                                     },
    //                                     {
    //                                         name: "positive",
    //                                         type: "CONDITIONING",
    //                                         link: 4,
    //                                     },
    //                                     {
    //                                         name: "negative",
    //                                         type: "CONDITIONING",
    //                                         link: 6,
    //                                     },
    //                                     {
    //                                         name: "latent_image",
    //                                         type: "LATENT",
    //                                         link: 15,
    //                                     },
    //                                 ],
    //                                 outputs: [
    //                                     {
    //                                         name: "LATENT",
    //                                         type: "LATENT",
    //                                         links: [10],
    //                                         slot_index: 0,
    //                                     },
    //                                 ],
    //                                 properties: {
    //                                     "Node name for S&R": "KSampler",
    //                                 },
    //                                 widgets_values: [
    //                                     618284639060744,
    //                                     "randomize",
    //                                     20,
    //                                     8,
    //                                     "euler",
    //                                     "normal",
    //                                     1,
    //                                 ],
    //                             },
    //                             {
    //                                 id: 6,
    //                                 type: "CLIPTextEncode",
    //                                 pos: [415, 186],
    //                                 size: {
    //                                     0: 422.84503173828125,
    //                                     1: 164.31304931640625,
    //                                 },
    //                                 flags: {},
    //                                 order: 3,
    //                                 mode: 0,
    //                                 inputs: [
    //                                     {
    //                                         name: "clip",
    //                                         type: "CLIP",
    //                                         link: 3,
    //                                     },
    //                                 ],
    //                                 outputs: [
    //                                     {
    //                                         name: "CONDITIONING",
    //                                         type: "CONDITIONING",
    //                                         links: [4],
    //                                         slot_index: 0,
    //                                     },
    //                                 ],
    //                                 properties: {
    //                                     "Node name for S&R": "CLIPTextEncode",
    //                                 },
    //                                 widgets_values: [
    //                                     "change the background to blue and keep the front people the same",
    //                                 ],
    //                             },
    //                             {
    //                                 id: 7,
    //                                 type: "CLIPTextEncode",
    //                                 pos: [413, 389],
    //                                 size: {
    //                                     0: 425.27801513671875,
    //                                     1: 180.6060791015625,
    //                                 },
    //                                 flags: {},
    //                                 order: 4,
    //                                 mode: 0,
    //                                 inputs: [
    //                                     {
    //                                         name: "clip",
    //                                         type: "CLIP",
    //                                         link: 5,
    //                                     },
    //                                 ],
    //                                 outputs: [
    //                                     {
    //                                         name: "CONDITIONING",
    //                                         type: "CONDITIONING",
    //                                         links: [6],
    //                                         slot_index: 0,
    //                                     },
    //                                 ],
    //                                 properties: {
    //                                     "Node name for S&R": "CLIPTextEncode",
    //                                 },
    //                                 widgets_values: ["text, watermark,person"],
    //                             },
    //                         ],
    //                         links: [
    //                             [1, 4, 0, 3, 0, "MODEL"],
    //                             [3, 4, 1, 6, 0, "CLIP"],
    //                             [4, 6, 0, 3, 1, "CONDITIONING"],
    //                             [5, 4, 1, 7, 0, "CLIP"],
    //                             [6, 7, 0, 3, 2, "CONDITIONING"],
    //                             [10, 3, 0, 14, 0, "LATENT"],
    //                             [11, 4, 2, 14, 1, "VAE"],
    //                             [12, 14, 0, 9, 0, "IMAGE"],
    //                             [13, 10, 0, 16, 0, "IMAGE"],
    //                             [14, 4, 2, 16, 1, "VAE"],
    //                             [15, 16, 0, 3, 3, "LATENT"],
    //                         ],
    //                         groups: [],
    //                         config: {},
    //                         extra: {},
    //                         version: 0.4,
    //                     },
    //                 },
    //             },
    //         });
    //     }
    // }, [imageData]);

    const [images, setImages] = useState({});

    useEffect(() => {
        if (imageData != null) {
            let payload = {
                prompt: promptValue,
                image: imageData,
            };
            dispatch(
                getOutputImageAction(payload, () => {
                    setImageShow(true);
                })
            );
            // const ws = new WebSocket(
            //     `ws://${serverAddress}/ws?clientId=${clientId}`
            // );
            // ws.onopen = () => {
            //     console.log("connection established");
            //     queuePrompt(prompt).then((promptId) => {
            //         getImages(ws, promptId);
            //     });
            // };
            // ws.onmessage = (event) => {};
            // return () => {
            //     ws.close();
            // };
        }
    }, [imageData]);
    const queuePrompt = async (prompt) => {
        const response = await axios.post(`http://${serverAddress}/prompt`, {
            prompt,
            client_id: clientId,
        });
        return response.data.prompt_id;
    };
    const getImage = async (filename, subfolder, folderType) => {
        const response = await axios.get(`http://${serverAddress}/view`, {
            params: { filename, subfolder, type: folderType },
        });
        return response.data;
    };
    const getHistory = async (promptId) => {
        const response = await axios.get(
            `http://${serverAddress}/history/${promptId}`
        );
        return response.data;
    };
    const getImages = async (ws, promptId) => {
        // Logic to handle WebSocket responses and get images
        let history = await getHistory(promptId);
        history = history[promptId];
        let outputImages = {};
        for (const node in history.outputs) {
            let imagesOutput = [];
            if (history.outputs[node].images) {
                for (const image of history.outputs[node].images) {
                    const imageData = await getImage(
                        image.filename,
                        image.subfolder,
                        image.type
                    );
                    imagesOutput.push(imageData);
                }
            }
            outputImages[node] = imagesOutput;
        }
        setImages(outputImages);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImgFile(file);
    };
    const dispatch = useDispatch();
    const handleInput = (e) => {
        const { value } = e.target;
        setPromptValue(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setImageShow(false);
        const formData = {
            file: imgFile,
            prompt: promptValue,
        };
        dispatch(animakerAction(formData, () => {}));
    };

    return (
        <div className="bg-[#3634cb] px-3 pt-24 lg:p-36">
            <div className="mx-auto justify-center">
                <div
                    onClick={() => {
                        imgFile == "" &&
                            document.getElementById("imageInput").click();
                    }}
                    className="h-[300px] my-2 mx-auto bg-danger rounded-xl w-[300px] bg-white border-dashed border-2 border-gray-600 hover:cursor-pointer"
                >
                    <img src={imgFile && URL.createObjectURL(imgFile)} />
                    {imgFile == "" && (
                        <FaUpload
                            size={50}
                            className="mx-auto relative bottom-44 text-gray-600"
                        />
                    )}
                </div>
                <button
                    className="flex mx-auto bg-gradient-to-r from-[#ff6c10] to-[#ffc450] text-white px-4 py-2 rounded-lg w-fit  font-bold hover:cursor-pointer hover:bg-black"
                    onClick={() =>
                        document.getElementById("imageInput").click()
                    }
                >
                    Upload File
                </button>
                <input
                    type="file"
                    id="imageInput"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                />
            </div>
            <div className="text-center">
                <input
                    type="text"
                    placeholder="Enter your desired prompt..."
                    value={promptValue}
                    onChange={handleInput}
                    className="py-2 w-[270px] md:w-[300px] px-2 border-2 border-[#ff6c10]  mt-3 rounded-lg"
                />
                <br />
                <button
                    disabled={loading}
                    type="button"
                    className="font-semibold hover:bg-gradient-to-r from-[#ff6c10] to-[#ffc450] text-xl bg-black text-white rounded-3xl px-4 py-2 my-4"
                    onClick={handleSubmit}
                >
                    {loading ? <Spinner /> : " Submit"}
                </button>
            </div>
            {imageShow && (
                <div className="h-[300px] my-2 mx-auto rounded-xl w-[300px] ">
                    <img src={`${baseURL}/get-response`} />
                </div>
            )}
        </div>
    );
}

// <div>
//   {Object.entries(images).map(([nodeId, imagesData]) =>
//     imagesData.map((imageData, index) => (
//       <img key={`${nodeId}-${index}`} src={`${imageData}`} alt="Generated" />
//     ))
//   )}
// </div>
